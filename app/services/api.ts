import qs from 'qs';

let baseURL = '';
switch (process.env.NODE_ENV) {
    case 'production':
        baseURL = "http://127.0.0.1:3003"
        break;
    case 'test':
        baseURL = "http://127.0.0.1:3003";
        break;
    default:
        baseURL = "http://127.0.0.1:3003";
        break;
}


const request =  (url, options = {}) => {
  url = baseURL + url;
  !options.method ? options.method = 'GET' : null;
  // params处理
  if (options.hasOwnProperty('params')) {
      if (/^(GET|HEAD|OPTIONS)$/i.test(options.params)) {
          const ask = url.includes('?') ? '&' : '?';
          url + `${ask}${qs.stringify(params)}`;
      }
      delete options.params;
  }
  //合并配置
  options = Object.assign({
      credentials: 'include',//资源凭证
      headers: {}
  }, options);
  options.headers.Accept = "application/json";

  //post请求
  if (/^(POST|PUT|PATCH|DELETE)$/i.test(options.method)) {
      !options.type ? options.type = 'urlencoded' : null;
      if (options.type === 'urlencoded') {
          options.headers['Content-Type'] = 'application/x-www-urlencoded';
          options.body = qs.stringify(options.body);
      }
      else if (options.type === 'json') {
          options.headers['Content-Type'] = 'application/json';
          options.body = JSON.stringify(options.body);
      }
  }
  // fetch
  return fetch(url, options).then(res => {
      if(res.ok === false) {
        return Promise.reject(res.json())
      }
      /* 非200状态码 */
      return res.clone().json()
  }).then(res => {
    return res.data
  }).catch(err => {
      return Promise.reject(err);
  })
}

export { request }
