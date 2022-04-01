import { useRouter } from "next/router";
const newsw = () => {
  const router = useRouter();
  console.log(router.query.newsid, "huhuhu");
  return <>news page is herewewewee</>;
};
export default newsw;
