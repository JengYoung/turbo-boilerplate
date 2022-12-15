# storybook-ui

씨유레터의 컴포넌트들을 스토리북으로 문서화 및 시각화하는 기능을 담당합니다.

## 트러블슈팅

`pnpm`에서 유독 설치가 되지 않는 문제가 발생했습니다.  
이를 위해 별도로 `yarn`을

따라서 다음과 같은 모든 경우의 수를 제거한 결과 약 10시간 만에 동작했습니다.

- [x] `pnpx sb init -s`를 통해 설치할 것. [참고자료](https://github.com/storybookjs/storybook/issues/12995)
- [x] 모노레포의 상위 디렉토리에 패키지에 관한 것들은 모두 정리했습니다.
- [x] `nvm`에서 `LTS`버전으로 Default를 변경 및 적용했습니다. (v16.15.0)

## 참고자료

다행히도 `NextJS 13` 이후, `turborepo`도 이에 맞춰 업데이트를 했고, 또한 스토리북에 관한 설치 방법이 [공식문서](https://turbo.build/repo/docs/handbook/tools/storybook)에 나왔습니다. (이마저도 되지 않아 위 3개를 다 했습니다.)

특히, `swc`로도 `vite`가 빌드를 할 수 있기에, 좀 더 성능상 이점을 기대할 수 있지 않나 싶어, 나름 만족합니다.
