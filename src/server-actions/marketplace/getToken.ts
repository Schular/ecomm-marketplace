"use server";

export const getToken = async () => {
  const token = Buffer.from(
    `${process.env.EMAG_USERNAME}:${process.env.EMAG_PASSWORD}`,
  ).toString("base64");

  return token;
};
