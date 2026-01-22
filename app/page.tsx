import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* AppShell 헤더가 이미 있으므로, 여기에는 헤더/언어토글/Start 버튼을 절대 추가하지 않습니다. */}

      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroTopline}>
            업무 목적 기반 · 프레임 선택 · 즉시 산출
          </div>

          <h1 className={styles.heroTitle}>
            업무 목적을 입력하면,
            <br />
            실행 가능한 프롬프트 5종이 즉시 생성됩니다
          </h1>

          <p className={styles.heroDesc}>
            기획·마케팅·세일즈·운영·인사에서 바로 쓰는 구조(목표/대상/제약/산출물
            형식)로 정리합니다. <span className={styles.muted}>복잡한 설정 없이, 결과는
            바로 복사 가능.</span>
          </p>

          <div className={styles.heroCtaRow}>
            <Link className={styles.primaryBtn} href="/tool">
              업무용 프롬프트 생성하기
            </Link>
            <a className={styles.ghostBtn} href="#sample">
              샘플 산출물 보기
            </a>
          </div>

          <div className={styles.kpiGrid} aria-label="핵심 가치">
            <div className={styles.kpiCard}>
              <div className={styles.kpiTitle}>10초 안에 생성</div>
              <div className={styles.kpiDesc}>입력 → 프레임 선택 → 즉시 산출</div>
            </div>
            <div className={styles.kpiCard}>
              <div className={styles.kpiTitle}>실무 문서 톤</div>
              <div className={styles.kpiDesc}>보고서/기획서/메일/안내문에 바로 적용</div>
            </div>
            <div className={styles.kpiCard}>
              <div className={styles.kpiTitle}>일관된 포맷</div>
              <div className={styles.kpiDesc}>팀에서 써도 흔들리지 않는 구조</div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className={styles.sectionDivider} />

        {/* HOW IT WORKS */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>3단계로 완성</h2>
            <p className={styles.p}>
              복잡한 과정 없이, 실무자가 바로 사용할 수 있도록 흐름을 최소화했습니다.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepBadge}>STEP 1</span>
                <span className={styles.stepTitle}>목적 입력</span>
              </div>
              <div className={styles.stepBody}>
                단어 몇 개만 적어도 충분합니다. “무엇을 만들지”만 명확하면 됩니다.
              </div>
              <ul className={styles.bullets}>
                <li>예: “신제품 런칭, 20대 여성, SNS 광고”</li>
                <li>예: “내부 공지, 변경사항 안내, 반발 최소화”</li>
              </ul>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepBadge}>STEP 2</span>
                <span className={styles.stepTitle}>프레임 선택</span>
              </div>
              <div className={styles.stepBody}>
                목표/상황에 맞는 프레임을 고르면, 같은 입력도 결과의 톤과 구조가 달라집니다.
              </div>
              <ul className={styles.bullets}>
                <li>리스크 최소화형</li>
                <li>성과 설계형</li>
                <li>구조화형</li>
                <li>확장 탐색형</li>
                <li>요약형</li>
              </ul>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepBadge}>STEP 3</span>
                <span className={styles.stepTitle}>산출물 복사/적용</span>
              </div>
              <div className={styles.stepBody}>
                프롬프트 5종이 즉시 생성됩니다. 마음에 드는 결과를 선택해 바로 복사하세요.
              </div>
              <ul className={styles.bullets}>
                <li>보고서/기획서/메일 템플릿에 즉시 적용</li>
                <li>팀 공유용 버전도 같은 포맷으로 유지</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className={styles.sectionDivider} />

        {/* FRAMEWORK TABLE */}
        <section className={styles.section} id="frameworks">
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>5가지 전략 프레임</h2>
            <p className={styles.p}>
              상황에 맞는 구조를 선택해, 같은 입력에서도 다른 산출물을 얻습니다.
              <span className={styles.muted}> “표로 한 번에” 비교할 수 있게 정리했습니다.</span>
            </p>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "180px" }}>프레임</th>
                  <th>핵심 목적</th>
                  <th>추천 상황</th>
                  <th style={{ width: "220px" }}>대표 산출물</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tdStrong}>A. 리스크 최소화형</td>
                  <td>정확성/안정성/실수 방지</td>
                  <td>내부 공지, 정책/규정, 민감 이슈 대응</td>
                  <td>체크리스트·승인 플로우·리스크 로그</td>
                </tr>
                <tr>
                  <td className={styles.tdStrong}>B. 성과 설계형</td>
                  <td>목표 달성 중심(전환/매출/성과)</td>
                  <td>마케팅 캠페인, 세일즈 제안, KPI 설계</td>
                  <td>가설·지표·실행 플랜·실험 설계</td>
                </tr>
                <tr>
                  <td className={styles.tdStrong}>C. 구조화형</td>
                  <td>문서/회의/업무를 구조로 정리</td>
                  <td>기획서, 보고서, 회의 아젠다 정리</td>
                  <td>요약→근거→결론→액션 아이템</td>
                </tr>
                <tr>
                  <td className={styles.tdStrong}>D. 확장 탐색형</td>
                  <td>대안/아이디어 확장(사고 확장)</td>
                  <td>신사업, 제품 아이디어, 콘텐츠 기획</td>
                  <td>아이디어 맵·대안 비교·우선순위</td>
                </tr>
                <tr>
                  <td className={styles.tdStrong}>E. 요약형</td>
                  <td>핵심만 빠르게(결정 지원)</td>
                  <td>바쁜 임원 보고, 한 장 요약, 결재용</td>
                  <td>1페이지 요약·핵심 결론·리스크 3줄</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DIVIDER */}
        <div className={styles.sectionDivider} />

        {/* SAMPLE OUTPUT */}
        <section className={styles.section} id="sample">
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>샘플 산출물</h2>
            <p className={styles.p}>
              입력 → 결과가 어떤 형태로 나오는지, <span className={styles.muted}>박스/표 안에서 확실히 구분</span>합니다.
            </p>
          </div>

          <div className={styles.sampleGrid}>
            <div className={styles.sampleCard}>
              <div className={styles.sampleLabel}>입력 예시</div>
              <div className={styles.sampleBox}>
                운동화 광고, 2030 여성 타깃, 편안함 강조, SNS용
              </div>
              <div className={styles.sampleHint}>
                ※ 단어 조합만 있어도 됩니다. 상세는 도구가 구조화합니다.
              </div>
            </div>

            <div className={styles.sampleCard}>
              <div className={styles.sampleLabel}>결과 예시</div>
              <div className={styles.sampleBox}>
                “2030 여성을 위한 운동화를 SNS에 홍보해 주세요. 편안함을 주요 장점으로
                강조하고, 친근하고 공감 가는 톤으로 작성해 주세요.”
              </div>
              <div className={styles.sampleHint}>
                + 5가지 프레임 버전(A, B, C, D, E) 동시 생성
              </div>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "220px" }}>구분</th>
                  <th>포함 요소</th>
                  <th style={{ width: "260px" }}>검증 포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tdStrong}>출력 포맷(공통)</td>
                  <td>목표 · 대상 · 제약 · 톤 · 산출물 형식</td>
                  <td>팀에서 재사용 시 일관성 유지</td>
                </tr>
                <tr>
                  <td className={styles.tdStrong}>프레임별 차이</td>
                  <td>리스크/성과/구조/확장/요약 방향</td>
                  <td>같은 입력에서도 결과의 목적이 명확히 분리</td>
                </tr>
                <tr>
                  <td className={styles.tdStrong}>복사/적용</td>
                  <td>바로 붙여넣기 가능한 문장/템플릿</td>
                  <td>“이대로 실행” 가능 여부</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DIVIDER */}
        <div className={styles.sectionDivider} />

        {/* FAQ */}
        <section className={styles.section} id="faq">
          <div className={styles.sectionHeader}>
            <h2 className={styles.h2}>자주 묻는 질문</h2>
            <p className={styles.p}>
              IT 개발자/실무자가 실제로 확인하는 포인트를 기준으로 정리했습니다.
            </p>
          </div>

          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>
                팀에서 재사용해도 일관성이 유지되나요?
              </summary>
              <div className={styles.faqA}>
                네. “목표/대상/제약/산출물 형식”을 고정 구조로 유지하고, 프레임은 목적에 맞춰
                변화하도록 설계했습니다. 팀 공유 시 문서 톤이 들쑥날쑥해지는 문제를 줄입니다.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>
                사내 문서 톤/포맷에 맞게 커스터마이즈 되나요?
              </summary>
              <div className={styles.faqA}>
                가능합니다. 옵션에서 “톤/길이/산출물 형식”을 고르면, 결과가 문서 기준에 맞춰
                정렬됩니다.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQ}>
                민감 정보 없이도 사용할 수 있나요?
              </summary>
              <div className={styles.faqA}>
                네. 개인/기업 정보 입력을 권장하지 않습니다. 목적·대상·제약을 “범주형”으로만
                입력해도 충분히 구조화됩니다.
              </div>
            </details>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "240px" }}>권장 입력 범위</th>
                  <th>예시</th>
                  <th style={{ width: "260px" }}>비권장</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tdStrong}>범주형 정보</td>
                  <td>업무 유형, 대상 연령대, 채널, 톤, 산출물 형태</td>
                  <td rowSpan={2}>
                    개인식별정보, 고객 실명/연락처, 내부 기밀 원문, 계약서 전문
                  </td>
                </tr>
                <tr>
                  <td className={styles.tdStrong}>일반화된 맥락</td>
                  <td>“신규 캠페인”, “정책 변경 공지”, “리드 확보” 등</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className={styles.finalInner}>
            <div>
              <div className={styles.finalTitle}>지금 바로 시작하세요</div>
              <div className={styles.finalDesc}>
                신용카드 등록 없이 무료로 체험할 수 있습니다. 입력/저장 정책은 명확히 안내합니다.
              </div>
            </div>

            <div className={styles.finalBtns}>
              <Link className={styles.primaryBtn} href="/tool">
                업무용 프롬프트 생성하기
              </Link>
              <a className={styles.ghostBtn} href="#frameworks">
                전략 프레임 표 보기
              </a>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLine} />
          <div className={styles.footerText}>© 2026 Prompt Picker</div>
        </footer>
      </main>
    </div>
  );
}
