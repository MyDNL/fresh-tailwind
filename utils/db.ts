export const db = await Deno.openKv();
export const message_key = ["messages", 1];

export interface Settings {
  message: string;
};

export function updateDb(data: Settings){
  // console.log(data);
  return db.set(message_key, data);
}


// const stream = db.watch([message_key]);
// const reader = stream.getReader();
// console.log("kv.watch is active!");

// for await (const entries of stream) {
//   console.log(entries);
// }

// (async () => {
//   while (true) {
//     const x = await reader.read();
//     if (x.done) {
//       console.log("stream closed");
//       return;
//     }

//     console.log(x.value);
//   }
// })();

