---
title: NodeJs解析Form表单
date: 2022-04-12 10:03:26
---

```javascript
import bufferSplit from 'buffer-split';

function RequestHandler (req, res) {
  const contTentType = req.headers['content-type'];
  const boundary = `--${contTentType.split('boundary=').pop()}`;
  const startBoundary = Buffer.from(`${boundary}\r\n`, 'utf8');
  const endBoundary = Buffer.from(`${boundary}--\r\n`, 'utf8');

  let data = Buffer.from([]);
  for await (const chunk of req) {
    data = Buffer.concat([data, chunk]);
  }

  data = bufferSplit(data, endBoundary).shift();

  const keyValues = bufferSplit(data, startBoundary).filter(
    (item: Buffer) => item.length !== 0,
  );

  const form: any = {};

  for await (const keyValue of keyValues) {
    const [key, value] = bufferSplit(
      keyValue,
      Buffer.from('\r\n\r\n', 'utf8'),
    );

    let filename = key.toString().match(/filename=\"(.+?)\"/);
    let name = key.toString().match(/name=\"(.+?)\"/);
    let savePath = '';

    filename = filename ? `${Date.now()}_${filename[1]}` : '';
    savePath = filename ? path.resolve(homeDir, filename) : '';
    name = name ? name[1] : '';

    if (filename) {
      await util.promisify(fs.writeFile)(savePath, value);
    }

    form[name] = {
      value: filename ? value : value.toString().trim(),
      isFile: !!filename,
      filename,
      name,
      key,
    };
  }
}
```