const iconUnicode: { [key in Icon.Name]: string } = {
  search: "&#xe601;",
  more: "&#xe602;",
  move: "&#xe603;",
  mail: "&#xe604;",
  briefcase: "&#xe605;",
  "round-arrow": "&#xe606;",
  "contact-card": "&#xe607;",
  uploadfile: "&#xe608;",
  star: "&#xe609;",
  eye: "&#xe60a;",
  location: "&#xe60b;",
  "uploadfile-success": "&#xe60c;",
  graduate: "&#xe60d;",
  wechat: "&#xe620;",
  github: "&#xe60e;",
  arrow: "&#xe60f;",
};

export const getIconUnicodeByName = (name: Icon.Name) => {
  if (!iconUnicode[name]) {
    throw new Error("😈 请输入正确的图标名哦亲");
  }
  return iconUnicode[name];
};
