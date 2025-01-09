import requests
import pythonmonkey as pm

requests.packages.urllib3.disable_warnings()

def fetch_data(page, param_m, param_q):
    url = 'https://match.yuanrenxue.cn/api/match/6'
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
    }
    params = {
        'page': page,
        'm': param_m,
        'q': param_q,
    }
    res = requests.get(
        url,
        params = params,
        # headers = headers,
        # cookies = cookies,
        verify = False
    )
    return res

def get_params():
    js_code = pm.require('./js/nodejs.js')
    return js_code.get_params()

def run_app(pages):
    js_params = get_params()
    total = 0
    all_sum = 0
    for pid in range(1, pages + 1):
        res = fetch_data(pid, js_params['param_m'], js_params['param_q'])
        if res.status_code == 200:
            data = res.json()['data']
            total += len(data)
            for item in data:
                all_sum += item['value'] + item['value'] * 8 + item['value']  * 15
        else:
            print(f'{pid}页数据请求失败：{res.json()}')
    print(f'全部中奖的总金额：{all_sum}')

if __name__ == '__main__':
    run_app(5)