import $ from "../core";

$.prototype.get = async function(url, dataFormat = 'json') {
  let result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }

  switch (dataFormat) {
    case 'json':
      return await result.json();
    case 'text':
      return await result.text();
    case 'blob':
      return await result.blob();
  }
};

$.prototype.post = async function(url, data, dataFormat = 'text') {
  let result = await fetch(url, {
    method: 'POST',
    body: data,
  });

  switch (dataFormat) {
    case 'json':
      return await result.json();
    case 'text':
      return await result.text();
    case 'blob':
      return await result.blob();
  }
};