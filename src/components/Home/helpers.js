import { getQuote, getQuoteWithTag } from "../../axios/index";

export const getQuoteFn = async () => {
  try {
    const res = await getQuote();
    if (res.status === 200) {
      const q = { content: res.data.content, author: res.data.author };
      return q;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getQuoteFnWithtag = async (tag) => {
  try {
    const res = await getQuoteWithTag(tag);
    console.log(res);
    if (res.status === 200) {
      const q = { content: res.data.content, author: res.data.author };
      return q;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};
