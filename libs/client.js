//1. microCMS-sdkの読み出し
import { createClient } from "microcms-js-sdk";

//2. microCMSとの連携
export const client = createClient({
    //2-1. エンドポイント「https://”ek2unw50r4”.microcms.io/api/v1/」のダブルクオテーションの部分を記載
    serviceDomain: "ek2unw50r4",
    //2-2. APIキーの入力※直接記載してはいけないため、「.env.local」に記載し「process.env.API_KEY」で読み出す
    apiKey: process.env.API_KEY,
});