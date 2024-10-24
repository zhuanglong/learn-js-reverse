import requests
from collections import Counter

requests.packages.urllib3.disable_warnings()
session = requests.session()

def fetch_data(page):
    url = 'https://match.yuanrenxue.cn/api/match/3'
    headers = {
        "Host": "match.yuanrenxue.cn",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "yuanrenxue.project",
        "sec-ch-ua-platform": "\"Windows\"",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://match.yuanrenxue.cn/match/3",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    params = {
        'page': page,
    }
    # 清空 headers 头内容
    session.headers.clear()
    # 更新 headers 头内容
    session.headers.update(headers)
    res = session.post(url, params, verify = False)
    return res

def get_sessionid():
    url = 'https://match.yuanrenxue.cn/jssm'
    headers = {
        'Host': 'match.yuanrenxue.cn',
        'Connection': 'keep-alive',
        'Content-Length': '0',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua-platform': 'Windows',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
        'sec-ch-ua-mobile': '?0',
        'Accept': '*/*',
        'Origin': 'https://match.yuanrenxue.cn',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://match.yuanrenxue.cn/match/3',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cookie': ''
    }
    # 清空 headers 头内容
    session.headers.clear()
    # 更新 headers 头内容
    session.headers.update(headers)
    res = session.post(url, verify = False)
    return res

def get_frequent_num(arr):
    # 使用 Counter 统计每个元素的出现次数
    frequency_map = Counter(arr)

    # 找出出现次数最多的值
    most_frequent_val, max_count = frequency_map.most_common(1)[0]

    return most_frequent_val

def run_app(pages):
    count = 0
    value_arr = []
    for pid in range(1, pages + 1):
        get_sessionid()
        res = fetch_data(pid)
        if res.status_code == 200:
            res_data = res.json()['data']
            for item in res_data:
                value_arr.append(int(item['value']))
            count += len(res_data)
        else:
            print(f'{pid}页数据请求失败：{res.json()}')
    frequent_num = get_frequent_num(value_arr)
    print(f'出现频率最高的申请号：{frequent_num}')

if __name__ == '__main__':
    run_app(5)