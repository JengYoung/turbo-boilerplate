import { CustomTheme } from '@styles/globalTheme';

/**
 * @description
 * emotion에서 자동완성을 위해 커스텀 Theme을 만들어주었다.
 * 추후 타입 확장이 필요할 수 있으니 타입을 별도로 선언하여 느슨하게 결합한다.
 *
 * @see: https://emotion.sh/docs/typescript#define-a-theme
 */
declare module '@emotion/react' {
  export type Theme = CustomTheme;
}
