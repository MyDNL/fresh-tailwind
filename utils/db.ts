export const db = await Deno.openKv();

export interface MsgData {
  message: string;
  effect: string | null;
  createdAt?: number;
};

function generateMsgId(): string {
  return `${Date.now()}-${crypto.randomUUID()}`;
}

export async function updateDb(data: MsgData, channelId?: string): Promise<void>{
  const ch = channelId ? channelId : "public";
  const msgId = generateMsgId();
  const key1 = ["channel", ch, msgId];
  const key2 = ["channel_updated", ch];

  data.createdAt = Date.now();
  const op = db.atomic();
  const res = op.set(key1, data);
  op.set(key2, true);
  await op.commit();
}

export async function loadList(channelId: string): Promise<MsgData[]> {
  const out: MsgData[] = [];

  const iter = db.list(
      { prefix: ["channel", channelId] }, 
      { reverse: true, limit: 3 }
    );

  for await (const entry of iter) {
    const msg = entry.value as MsgData;
    out.push(msg);
  }

  return out;
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

