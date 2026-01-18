// Rate limiting using localStorage for FREE tier
export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetsAt: Date;
}

const RATE_LIMIT_KEY = 'prompt_picker_rate_limit';
const MAX_FREE_REQUESTS = 3;
const WINDOW_HOURS = 24;

interface RateLimitData {
  count: number;
  resetTime: string;
}

export function checkRateLimit(): RateLimitResult {
  if (typeof window === 'undefined') {
    return { allowed: true, remaining: MAX_FREE_REQUESTS, resetsAt: new Date() };
  }

  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = new Date();

    if (!stored) {
      // First request
      const resetTime = new Date(now.getTime() + WINDOW_HOURS * 60 * 60 * 1000);
      const data: RateLimitData = {
        count: 1,
        resetTime: resetTime.toISOString(),
      };
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
      return {
        allowed: true,
        remaining: MAX_FREE_REQUESTS - 1,
        resetsAt: resetTime,
      };
    }

    const data: RateLimitData = JSON.parse(stored);
    const resetTime = new Date(data.resetTime);

    // Check if window has expired
    if (now >= resetTime) {
      const newResetTime = new Date(now.getTime() + WINDOW_HOURS * 60 * 60 * 1000);
      const newData: RateLimitData = {
        count: 1,
        resetTime: newResetTime.toISOString(),
      };
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
      return {
        allowed: true,
        remaining: MAX_FREE_REQUESTS - 1,
        resetsAt: newResetTime,
      };
    }

    // Within window
    if (data.count >= MAX_FREE_REQUESTS) {
      return {
        allowed: false,
        remaining: 0,
        resetsAt: resetTime,
      };
    }

    // Increment count
    data.count += 1;
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
    return {
      allowed: true,
      remaining: MAX_FREE_REQUESTS - data.count,
      resetsAt: resetTime,
    };
  } catch (error) {
    console.error('Rate limit check error:', error);
    // On error, allow the request
    return { allowed: true, remaining: MAX_FREE_REQUESTS, resetsAt: new Date() };
  }
}

export function getRemainingRequests(): number {
  if (typeof window === 'undefined') return MAX_FREE_REQUESTS;

  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return MAX_FREE_REQUESTS;

    const data: RateLimitData = JSON.parse(stored);
    const now = new Date();
    const resetTime = new Date(data.resetTime);

    if (now >= resetTime) return MAX_FREE_REQUESTS;

    return Math.max(0, MAX_FREE_REQUESTS - data.count);
  } catch (error) {
    return MAX_FREE_REQUESTS;
  }
}

