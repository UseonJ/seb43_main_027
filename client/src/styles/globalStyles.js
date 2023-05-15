import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  /* 프로젝트 메인 색상표 */
  --cyan-light-100: #E6FFFB;
  --cyan-light-200: #B5F5EC;
  --cyan-light-300: #87E8DE;
  --cyan-light-400: #5CDBD3;
  --cyan-light-500: #36CFC9;
  --cyan-light-600: #13C2C2;
  --cyan-light-700: #08979C;
  --cyan-light-800: #006D75;
  --cyan-light-900: #00474F;
  --cyan-light-1000: #002329;
  --cyan-dark-100: #B2F1E8;
  --cyan-dark-200: #84E2D8;
  --cyan-dark-300: #58D1C9;
  --cyan-dark-400: #33BCB7;
  --cyan-dark-500: #13A8A8;
  --cyan-dark-600: #138585;
  --cyan-dark-700: #146262;
  --cyan-dark-800: #144848;
  --cyan-dark-900: #113536;
  --cyan-dark-1000: #112123;

  /* 요소 색상 */
  --button-inactive-color: #555555;
  --button-inactive-hover-color: #eb2f96;
  
  /* 로딩 배경 */
  --loding-bg: #efefef;

  /* category-games-palette */
  --title-bg: #f7f7f8;
  --sub-text-color: #53535f;
  --button-hover-color: #eb2f96;
  --default-text-color: #626262;

  /* 카테고리별 태그 색상 파레트 */
  --category-tag-color-default: #fff;
  --category-tag-bg-default: #3e3948;
  --category-tag-color-0: #13A8A8;
  --category-tag-bg-0: #B2F1E8;
  --category-tag-color-1: #fff;
  --category-tag-bg-1: #ff55b2;
  --category-tag-color-2: #ff5b55;
  --category-tag-bg-2: #fff955;
  --category-tag-color-3: #2f2ba8;
  --category-tag-bg-3: #557dff;

  /* 게임채널 색상 파레트 */
  --page-bg: #f7f7f8;
}

* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
    text-decoration: none;
  }
a:link {
  color: inherit;
}
a:visited {
  color: inherit;
}

button {
    cursor: pointer;
  }

//  rem 사용을 위한 font-size 조절, header를 위한 padding-top
html {
  font-size: 62.5%;
}

body {
    padding-top: 50px;
    overflow: overlay;
    height: 100%;
  }


//  스크롤바 커스터마이징
body::-webkit-scrollbar {
    width: 0.8vw;
    overflow:overlay;
  }

  body::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 42%, 0.49);
    opacity: 0.5;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: hsla(0, 0%, 42%, 0.69);
    opacity: 0.5;
  }
`;
export default GlobalStyle;
