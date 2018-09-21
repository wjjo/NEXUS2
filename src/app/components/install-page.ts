export interface InstallPage {

  /**
   * 디테일 페이지가 있는지
   */
  hasDetailPage(): boolean;

  /**
   * 다음 페이지 있는지
   */
  hasNext(): boolean;

  /**
   * 다음 페이지 URL 반환
   */
  getNext(): string;

}
