module.exports = {
  types: [
    { value: "feat", name: "feat | 기능을 추가해요." },
    { value: "fix", name: "fix | 버그를 수정해요." },
    { value: "refactor", name: "refactor | 코드를 리팩토링해요." },
    { value: "perf", name: "perf | 성능을 개선해요." },
    {
      value: "style",
      name: "style | 포맷팅이나 컨벤션에 따라 수정 사항을 반영해요.",
    },
    { value: "docs", name: "docs | 문서의 내용을 일부 변경해요." },
    { value: "test", name: "test | 테스트 코드를 추가하거나 리팩토링해요." },
    {
      value: "chore",
      name: "chore | 사소한 변경사항이나, 패키지 매니저를 관리해요.",
    },
    { value: "revert", name: "revert | 이전의 코드로 되돌려요." },
    { value: "ci", name: "ci | CI를 업데이트해요." },
    { value: "build", name: "build | 빌드 관련 코드를 업데이트해요." },
  ],
  scopes: [
    "component",
    "css-style",

    "custom-hook",
    "store",
    "util",
    "api",

    "assets",
    "package",

    "configuration",
    "husky",
    "workflow",

    "lint",
    "formatting",

    "README",
    "CHANGELOG",
  ],
  allowCustomScopes: true,
};
