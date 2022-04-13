import { User } from "../types/userType";

export class paramsFiltering {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}

  public nameFilter(data: User[], name: string | null) {
    if (name) {
      data = data.filter((user) => user.name.indexOf(name) >= 0);
    }
    return data;
  }

  genderFilter(data: User[], gender: string | null) {
    if (gender) {
      switch (gender) {
        case "male":
          data = data.filter((user) => user.gender === "男性");
          break;
        case "female":
          data = data.filter((user) => user.gender === "女性");
          break;
      }
    }
    return data;
  }
  gradeFilter(data: User[], grade: string | null) {
    if (grade) {
      switch (grade) {
        case "B1":
          data = data.filter((user) => user.grade === "B1");
          break;
        case "B2":
          data = data.filter((user) => user.grade === "B2");
          break;
        case "B3":
          data = data.filter((user) => user.grade === "B3");
          break;
        case "B4":
          data = data.filter((user) => user.grade === "B4");
          break;
        case "M1":
          data = data.filter((user) => user.grade === "M1");
          break;
        case "M2":
          data = data.filter((user) => user.grade === "M2");
          break;
      }
    }
    return data;
  }
  belongFilter(data: User[], belong: string | null) {
    if (belong) {
      switch (belong) {
        case "EE":
          data = data.filter((user) => user.belong === "EE");
          break;
        case "IS":
          data = data.filter((user) => user.belong === "IS");
          break;
        case "PH":
          data = data.filter((user) => user.belong === "PH");
          break;
        case "CU":
          data = data.filter((user) => user.belong === "CU");
          break;
        case "BS":
          data = data.filter((user) => user.belong === "BS");
          break;
        case "AR":
          data = data.filter((user) => user.belong === "AR");
          break;
      }
    }
    return data;
  }

  //and検索
  tagsFilter(data: User[], tags: string[]) {
    if (tags[0].length !== 0) {
      for (const tag of tags) {
        data = data.filter((user) => {
          if (!user.tag) return false;
          let flag = false;
          for (const userTag of user.tag) {
            flag = flag || userTag === tag;
          }
          return flag;
        });
      }
    }
    return data;

    // or検索
    // if (tags[0].length !== 0) {
    //   data = data.filter((user) => {
    //     if (user.tag?.length === 0) return false;

    //     let flag: boolean = false; //or検索の場合はここをfalseにし、↓
    //     for (const userTag of user.tag!) {
    //       for (const tag of tags!) {
    //         flag = flag || userTag === tag; //ここを||にする。
    //       }
    //     }
    //     return flag;
    //   });
    // }
    // return data;
  }
}
