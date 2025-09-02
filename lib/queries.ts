export async function getALLfaithtime() {
  const timestamp = new Date().getTime();
  const res = await fetch(
    `https://wordpress-1504076-5761586.cloudwaysapps.com//wp-json/wp/v2/FaithTime?_=${timestamp}`
  );
  const data = await res.json();
  if (!data || data.error) {
    return {
      notFound: true,
    };
  }
  return data;
}
