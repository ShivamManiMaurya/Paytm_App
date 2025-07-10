export const BaseUrl = () => {
  if (process.env.VERCEL_ENV === "production") {
    console.log("Live on production 🚀");
    return process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  } else {
    console.log("Running locally");
    return process.env.NEXT_PUBLIC_NEXTAUTH_URL ?? "";
  }
};
