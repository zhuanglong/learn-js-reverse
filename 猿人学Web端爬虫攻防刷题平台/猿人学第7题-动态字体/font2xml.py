import os
from fontTools.ttLib import TTFont

def get_xml():
    font = TTFont(f'{os.path.dirname(__file__)}/字体文件.ttf')
    font.saveXML(f'{os.path.dirname(__file__)}/字体XML.xml')
    return font

def get_str_list():
    font = get_xml()
    # 拿到所有 TTGlyph 节点中的 name 值
    glyph_names = font.getGlyphOrder()
    strs_list = []
    for glyph_name in glyph_names:
        if (glyph_name != '.notdef'):
            # 在 TTGlyph 节点中找到 on 值
            flags = font['glyf'][glyph_name].flags
            strs = ''
            # 然后拼接 on 值
            for flag in flags:
                strs += str(flag)
            strs_list.append(strs)        
    print(strs_list)

if __name__ == '__main__':
    get_str_list()