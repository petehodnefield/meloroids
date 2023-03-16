const findAge = (age) => {
  const currentYear = new Date().getFullYear();
  const artistAge = currentYear - age;
  return artistAge;
};
export const artistData = [
  {
    name: "Juice Wrld",
    age: findAge(1998),
    image:
      "https://thesource.com/wp-content/uploads/2019/12/juice-wrld-dead-600x398.jpg",
  },
  {
    name: "Polo G",
    age: findAge(1999),
    image:
      "https://images.complex.com/complex/images/c_crop,h_1953,w_1920,x_0,y_1/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/yozzg8urszten6laghpl/polo-g-press-2-daniel-prakopcyk?fimg-ssr-default",
  },
  {
    name: "Doja Cat",
    age: findAge(1995),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Doja_Cat_in_2021.jpg/800px-Doja_Cat_in_2021.jpg",
  },
  {
    name: "Blxst",
    age: findAge(1992),
    image:
      "https://www.billboard.com/wp-content/uploads/2022/04/blxst-credit-Direct-Devin-2022-billboard-1548.jpg",
  },
];
