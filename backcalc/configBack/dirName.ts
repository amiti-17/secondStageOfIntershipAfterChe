interface DirNameType {
  [key: string]: string
}

const dirName: DirNameType = {
  frontServer: 'http://localhost:8080/',
  indexHtml: 'index.html',
  ['404page']: '404page',
  static: 'static',
  oneLvlUp: '../',
  rootDir: '/',
};

export default dirName;