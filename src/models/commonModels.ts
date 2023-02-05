export class SearchStateModel {
  searchValue: string;
  isValidValue: boolean;

  constructor() {
    this.searchValue = "";
    this.isValidValue = false;
  }
}
