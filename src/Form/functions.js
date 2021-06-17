export const generatePassword = () => {
  var chars = "abcdefghijklmnopqrstuvwxyz!@ABCDEFGHIJKLMNOP1234567890";
  var pass = "";
  for (var x = 0; x < 6; x++) {
    var i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
  }
  return pass;
}
export const getField = id => document.getElementById(id);

export const makeForm = data => {
  const form = new FormData();

  for(const [key, value] of Object.entries(data)){
    form.append(key, value);
  }

  return form;
}

export const postForm = (url, form, cb) =>{
  const headers = new Headers();
  // headers.append('Accept', 'application/json');
  headers.append('Accept', '*/*');
  // headers.append('Content-Type','multipart/form-data;');
  // headers.append('Host', 'upload.ci')

    const request = new Request(url, {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    body: form
  })

  fetch(request)
  .then(resp=>resp.json())
  .then(res=>cb(res))
}

