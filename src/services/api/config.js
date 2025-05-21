export const API_BASE_URL = "https://ws.cqtzsb.org/api";

export const DEFAULT_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b11)XWEB/9185",
  "Content-Type": "application/json",
  xweb_xhr: "1",
  Authorization:
    "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsid2VTZXJ2aWNlIl0sInVzZXJfbmFtZSI6bnVsbCwic2NvcGUiOlsiYWxsIl0sIm5hbWUiOiLlkajmtannhLYiLCJleHAiOjE3NDc4MDM2MTIsInVzZXJpZCI6IjMxMTY5MzUxODE3MjIwOSIsImp0aSI6IlRpMnI2SllCdzR2eU9OR0xUVnRnM0hBUGNZTSIsIm9yZ2lkIjoiNTc0ODg0NDQwODk0MjM2MjY0MyIsImNsaWVudF9pZCI6ImNsaWVudC1taW5pIn0.S070TkC-hkJFxVGjRNHB9w06JXmnEZ0tlXBG0_sU789Tu-wad1sQ_YRyLivx5UmEFtfmm92wpSvWTFJYWtb8mHkbFQmk9pmOpqVFHBGTe5N3LQRu5ZdepnKQfXLsgAY3waD5EwW3oKJmCBf8rBDtAx_dsOHXpTdmwAKOxqa6EROdw0ZM5bhApfxVUQbvlBFDWSvaNf0PhSOS0DEREN3KBs5ECrO0OlvCfoM5z2Z3RjOm3o0-QfaOVvqDIl8XWDnRjhDHh1LXrnT3FJ2fo8ZIt29sObAAtk1sZwi3QvK7QGk6mc0FOMTjGkoArih3AhusqQD9YfLYYJSYcRrIbyr0VQ",
  "Sec-Fetch-Site": "cross-site",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  Referer: "https://servicewechat.com/wxdd2d178bbfa2bfe9/57/page-frame.html",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "content-type": "application/json",
};

export const DEFAULT_CONFIG = {
  method: "POST",
  headers: DEFAULT_HEADERS,
  cache: "no-store",
  next: { revalidate: 3600 }, // 缓存1小时
};
