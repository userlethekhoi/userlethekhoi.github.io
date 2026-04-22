import re
with open('temp.html', 'r', encoding='utf-8') as f:
    text = f.read()
m = re.search(r'property="og:image"\s*content="([^"]+)"', text)
if m:
    print(m.group(1))
else:
    m = re.search(r'https://i\.pinimg\.com/originals/[^"]+\.jpg', text)
    if m:
        print(m.group(0))
    else:
        print("Not found")
