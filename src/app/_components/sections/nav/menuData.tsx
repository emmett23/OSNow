export type Menu = {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
  };
  
  const menuData: Menu[] = [
    {
      id: 1,
      title: "Home",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: "About",
      path: "/about",
      newTab: false,
    },
    {
      id: 3,
      title: "Blogs",
      path: "/blog",
      newTab: false,
    },
    {
      id: 4,
      title: "Partner with us",
      path: "/partner-with-us",
      newTab: false,
    },
  ];
  export default menuData;