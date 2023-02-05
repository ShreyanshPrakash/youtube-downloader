export class SearchStateModel {
    searchValue: string;
    isValidValue: boolean;
    isDuplicate: boolean;
  
    constructor() {
      this.searchValue = "";
      this.isValidValue = false;
      this.isDuplicate = false;
    }
  }
  