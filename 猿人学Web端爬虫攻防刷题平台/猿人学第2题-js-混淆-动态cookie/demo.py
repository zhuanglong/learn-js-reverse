import requests
import pythonmonkey as pm

def fetch_data(page, m):
    res = requests.get(
        url = 'https://match.yuanrenxue.cn/api/match/1',
        params = {
            'page': page,
            'm': m
        }
    )
    return res

def get_param_m():
    js_code = pm.require('./core.js')
    return js_code.window.playload_m()

def run_app(pages):
    count = 0
    value = 0
    param_m = get_param_m()
    # for pid in range(1, pages + 1):
    #     res = fetch_data(pid, param_m)
    #     if res.status_code == 200:
    #         res_data = res.json()['data']
    #         for item in res_data:
    #             value += int(item['value'])
    #         count += len(res_data)
    #     else:
    #         print(f'{pid}页数据请求失败：{res.json()}')
    # print(f'机票平均价格：{value / count}')

if __name__ == '__main__':
    run_app(5)