import requests
import pythonmonkey as pm

requests.packages.urllib3.disable_warnings()

def fetch_data(page, param_m, param_f, cookie_R):
    url = 'https://match.yuanrenxue.cn/api/match/5'
    headers = {
        "Host": "match.yuanrenxue.cn",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "sec-ch-ua-platform": "\"Windows\"",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "http",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
    }
    cookies = {
        'RM4hZBv0dDon443M': cookie_R,
    }
    params = {
        'page': page,
        'm': param_m,
        'f': int(param_f),
    }
    res = requests.get(
        url,
        params = params,
        # headers = headers,
        cookies = cookies,
        verify = False
    )
    return res

def get_params():
    js_code = pm.require('./js/nodejs.js')
    return js_code.get_params()

def run_app(pages):
    js_params = get_params()
    total = 0
    value_list = []
    for pid in range(1, pages + 1):
        res = fetch_data(pid, js_params['param_m'], js_params['param_f'], js_params['cookie_RM4hZBv0dDon443M'])
        if res.status_code == 200:
            data = res.json()['data']
            total += len(data)
            for item in data:
                value_list.append(item['value'])
        else:
            print(f'{pid}页数据请求失败：{res.json()}')
    value_list.sort(reverse=True)
    top5_sum = sum(value_list[0:5])
    print(f'前 5 名直播间热度的加和：{top5_sum}')

if __name__ == '__main__':
    run_app(5)