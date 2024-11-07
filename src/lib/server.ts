import { query } from "@solidjs/router";

export const testData = query(async function () {
    "use server";
    console.log('test');
    return 'test';
})