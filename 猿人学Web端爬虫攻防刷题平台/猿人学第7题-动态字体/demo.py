import requests
import pythonmonkey as pm
import base64
import os
from fontTools.ttLib import TTFont

requests.packages.urllib3.disable_warnings()

number_dict = {
    '10010101001110101011010101010101000100100': '9',
    '111111111111111': '4',
    '100110101001010101011110101000': '2',
    '10101100101000111100010101011010100101010100': '3',
    '1001101111': '1',
    '10101010100001010111010101101010010101000': '6',
    '1110101001001010110101010100101011111': '5',
    '10100100100101010010010010': '0',
    '101010101101010001010101101010101010010010010101001000010': '8',
    '1111111': '7',
}

def fetch_data(page):
    url = 'https://match.yuanrenxue.cn/api/match/7'
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

# 写入动态字体
def with_ttf(woff):
    base64_code = woff
    with open(f'{os.path.dirname(__file__)}/movie_font.ttf', 'wb') as f:
        f.write(base64.decodebytes(base64_code.encode()))

# 获取胜点
def get_wp_list(data):
    # 替换为 uni，在 TTGlyph 节点中找到 on 值
    font = TTFont(f'{os.path.dirname(__file__)}/movie_font.ttf')
    font.saveXML(f'{os.path.dirname(__file__)}/movie_font.xml')
    wp_list = []
    for item in data:
        glyph_names = item['value'].strip().replace('&#x', 'uni').split(' ')
        wp = ''
        for glyph_name in glyph_names:
            flags = font['glyf'][glyph_name].flags
            strs = ''
            for flag in flags:
                strs += str(flag)
            wp += number_dict.get(strs, '')
        wp_list.append(int(wp))
    return wp_list

# 获取渲染的名字列表
def get_name_list(page, data):
    yyq = 1
    name_list = ["极镀ギ紬荕","爷灬霸气傀儡","梦战苍穹","傲世哥","мaη肆風聲","一刀メ隔世","横刀メ绝杀","Q不死你R死你","魔帝殤邪","封刀不再战","倾城孤狼","戎马江湖","狂得像风","影之哀伤","謸氕づ独尊","傲视狂杀","追风之梦","枭雄在世","傲视之巅","黑夜刺客","占你心为王","爷来取你狗命","御风踏血","凫矢暮城","孤影メ残刀","野区霸王","噬血啸月","风逝无迹","帅的睡不着","血色杀戮者","冷视天下","帅出新高度","風狆瑬蒗","灵魂禁锢","ヤ地狱篮枫ゞ","溅血メ破天","剑尊メ杀戮","塞外う飛龍","哥‘K纯帅","逆風祈雨","恣意踏江山","望断、天涯路","地獄惡灵","疯狂メ孽杀","寂月灭影","骚年霸称帝王","狂杀メ无赦","死灵的哀伤","撩妹界扛把子","霸刀☆藐视天下","潇洒又能打","狂卩龙灬巅丷峰","羁旅天涯.","南宫沐风","风恋绝尘","剑下孤魂","一蓑烟雨","领域★倾战","威龙丶断魂神狙","辉煌战绩","屎来运赚","伱、Bu够档次","九音引魂箫","骨子里的傲气","霸海断长空","没枪也很狂","死魂★之灵"]
    # 渲染出来的名字列表
    new_name_list = []
    for item in data:
        new_name_list.append(name_list[yyq + (page - 1) * 10])
        yyq += 1
    return new_name_list

def run_app(pages):
    wp_list = []
    name_list = []
    for pid in range(1, pages + 1):
        res = fetch_data(pid)
        if res.status_code == 200:
            data = res.json()['data']
            woff = res.json()['woff']
            with_ttf(woff)
            wp_list += get_wp_list(data)
            name_list += get_name_list(pid, data)
        else:
            print(f'{pid}页数据请求失败：{res.json()}')
    max_wp_index = wp_list.index(max(wp_list))
    print(f'胜点最高的召唤师：{name_list[max_wp_index]}')

if __name__ == '__main__':
    run_app(5)