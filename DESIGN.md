# PANA GROUND — Design System v2

> 由 **新的 50 张** 精选照片（`精选50张/`，2026-09 更新）反推。相对 v1：暖纸底 → **冷中性底**；橙棕主导 → **中性 + 蓝灰**；赤陶仍是唯一强调色，但占比下降、只用于交互与少量点睛。

---

## 1. Objective

建立可复用的品牌侧视觉规范：服务摄影作品集、旅行/纪实专题、图文长页。气质关键词：**高原阴天、海面、结构、夜色、偶发暖光**——冷静、低噪、允许大面积空与灰。

## 2. Product Context

| 项 | 说明 |
|---|---|
| 来源 | `精选50张/` 50 张 JPG（用户重选后） |
| 内容结构 | 高原山湖雪 · 海湾村寨水路 · 寺庙金顶 · 城市结构/车站 · 夜色街景 · 少量静物织物 |
| 适用 | 摄影作品集、纪实长文、文化专题 |
| 不适用 | 高密度后台表单、强促销落地页 |
| 受众 | 接受冷调编辑感、要「现场」不要「模板感」的读者 |

## 3. Visual Foundations

### 3.1 色彩（像素聚类 v2）

主色族：**中性 > 蓝 > 橙 > 红 > 黄**。整体 **略冷**（avg warmth ≈ −1.5，v1 为 +7.6），饱和略降（S≈0.27），明度跨度大（L 26–152）：同时存在极夜与高调阴天。

#### Base tokens

| Token | Hex | 来源观察 |
|---|---|---|
| `--ink` | `#14161A` | 夜街、车内、山影、近黑中性 |
| `--paper` | `#E6E4DE` | 阴天天空、雪地、高调灰面 |
| `--ash` | `#9A9B9E` | 中灰、沥青、水泥 |
| `--limestone` | `#C4BDB2` | 沙丘、土路、干涸湖 |
| `--terracotta` | `#B84A32` | 织物、红船、寺院局部（唯一暖强调） |
| `--gold` | `#C4A46A` | 金身佛、木构暖光、车灯暖点 |
| `--cerulean` | `#5B7FA3` | 天空、雪山阴影、湖 |
| `--sea` | `#6E8B94` | 海湾、浪、浮村 |
| `--slate` | `#4A5A6E` | 深蓝夜、远山 |
| `--ivory` | `#F2F1ED` | 雪峰高光、白纸字色 |

#### Functional tokens

| Role | Token | 值 / 用法 |
|---|---|---|
| 文字主色 | `--text-primary` | `--ink` |
| 文字次色 | `--text-muted` | `#6B6E73`（冷灰，比 v1 更中性） |
| 背景 | `--bg` | `--paper`（冷纸，非暖奶油） |
| 分割线 | `--rule` | `#C9C6BE` |
| 强调 | `--accent` | `--terracotta`（链接/主按钮/选中） |
| 强调底 | `--accent-soft` | `#E8D4CC` |
| 冷信息 | `--cool` | `--cerulean`（次按钮、进度、图表） |
| 暖点缀 | `--warm-soft` | `--gold`（仅装饰线/小标签，不作主 CTA） |

**用色比例（建议）：** 冷中性/纸底 **55%** · 蓝灰/海 **25%** · 赤陶+金 **15%** · 深墨 **5%**。

### 3.2 字体

| 角色 | 字体栈 | 说明 |
|---|---|---|
| Display | `"Songti SC", Georgia, serif` | 标题 |
| Body | `"PingFang SC", "Segoe UI", system-ui, sans-serif` | 正文/表格/按钮 |
| Mono | `Consolas, "SF Mono", monospace` | 仅代码、token、文件名 |

约束：**中文 ≤3 种，英文 ≤3 种**。

**字号：** 12 / 14 / 15 / 18 / 22 / 28 / 40 · 正文 lh 1.65 · 标题 lh 1.15

### 3.3 版式与间距

- 基数 `4px`；大图段落间距优先 `8vh–12vh`（呼吸）
- 正文栏 `58ch–68ch`；图可破栏
- 圆角 **0–2px**；发丝线分隔；**禁止卡片网格作主布局**
- 外边距桌面 `40–48px`，移动 `20px`

### 3.4 影像

- 接受阴天低反差、冷蓝、大面积空景
- 人物可作环境/背影/远景，不作正脸主体
- 不强行把冷片调成暖滤镜；暖色只来自画面本身（织物、金顶、夜灯）

### 3.5 动效

- 200–360ms，`cubic-bezier(0.22,1,0.36,1)`
- 滚动显现、灯箱、轻位移；尊重 `prefers-reduced-motion`

## 4. Accessibility

- 正文对 `--bg` ≥ 4.5:1；大标题 ≥ 3:1
- 焦点：`2px solid var(--cerulean)`，offset 2px
- 触控 ≥ 44px；装饰图 `alt=""`

## 5. Voice & Tone

- 英文为主的作品集文案可用冷静观察口吻
- 具体名词：overcast, tide, corridor, lattice, plateau
- 避免「绝美 / 沉浸 / unlock」

**示例：**  
好：「Overcast on the salt flats — almost no color left but the road.」  
差：「Experience the stunning beauty of the highlands.」

## 6. Implementation Practices

```css
:root {
  --ink: #14161A;
  --paper: #E6E4DE;
  --ash: #9A9B9E;
  --limestone: #C4BDB2;
  --terracotta: #B84A32;
  --gold: #C4A46A;
  --cerulean: #5B7FA3;
  --sea: #6E8B94;
  --slate: #4A5A6E;
  --ivory: #F2F1ED;

  --text-primary: var(--ink);
  --text-muted: #6B6E73;
  --bg: var(--paper);
  --rule: #C9C6BE;
  --accent: var(--terracotta);
  --accent-soft: #E8D4CC;
  --cool: var(--cerulean);

  --font-display: "Songti SC", Georgia, serif;
  --font-body: "PingFang SC", "Segoe UI", system-ui, sans-serif;
  --font-mono: Consolas, "SF Mono", monospace;

  --space-1: 4px; --space-2: 8px; --space-3: 12px;
  --space-4: 16px; --space-5: 24px; --space-6: 32px;
  --space-7: 48px; --space-8: 72px;
  --radius: 0; --radius-sm: 2px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

| 组件 | 约定 |
|---|---|
| Primary button | terracotta 底 + ivory 字，2px 圆角 |
| Secondary | 透明 + `--rule` 边框 |
| 冷操作 | cerulean 描边或底 |
| 布局行 | bleed / split / offset，非等宽卡片阵 |
| 图说 | 12–13px，`--text-muted` |

## 7. Anti-Patterns

1. 暖奶油底 + 高饱和赤陶满版（v1 过暖，v2 不适用）  
2. 紫蓝渐变 Hero  
3. 16px 圆角阴影卡片六宫格  
4. 正脸人像主视觉  
5. 把阴天片强行暖化  
6. 空话营销文案  
7. 等宽字体进正文  

## 8. Decision-Making

- **v2 转向冷中性**：新片中性像素远多于橙，蓝灰山海占主体；纸底改为阴天灰白  
- **强调色仍用赤陶**：画面里织物/红船/寺院仍是唯一饱和暖信号，作交互锚点最稳  
- **金 `--gold` 降为点缀**：金佛与木构存在，但不足以做第二主色  
- **布局要「空」**：阴天与大片山海本身低信息量，网格塞满会显闷  

## 9. Workflow

1. 按新片建章节，优先冷空景作呼吸  
2. `--bg = --paper`，强调只用 `--accent`  
3. 每页至多一处签名动作  
4. 验收对比度 / reduced-motion / 375px  
5. 对照 §7 清 anti-pattern  

---

## 附录 A — 统计摘要（v2）

- 样本 50 张  
- 色族：中性 69.2k · 蓝 36.2k · 橙 28.1k · 红 18.1k · 黄 15.2k · 青/黄绿/绿 <14k  
- 平均 L=97 · S=0.27 · W=−1.5 · 范围 L 26–152  

## 附录 B — 关键词

`overcast plateau · sea slate · structure & night · sparse warmth · cool paper`  
`阴天高原 · 海灰蓝 · 结构与夜色 · 稀疏暖点缀 · 冷纸底`
