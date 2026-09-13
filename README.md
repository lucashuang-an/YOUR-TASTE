# ANAN's Photographs

**EN** · [中文](#中文)

A personal photography portfolio whose visual system was derived from the images themselves.

## Background

This project follows a simple loop:

1. **Curate** — Select 50 frames from three large personal camera dumps (`100_PANA` / `101_PANA` / `102_PANA`). Portraits are excluded; subjects are kept non-redundant.
2. **Extract** — Use a large language / multimodal model to read color, light, mood, and subject patterns (pixel clustering + contact-sheet review + critique rounds). Weak frames (overexposure, dead shadows, clutter, portrait faces) are swapped until the set holds together.
3. **Synthesize** — Turn those findings into **YOUR-TASTE v2**, a small design system: cool paper ground, sparse terracotta accent, cerulean for information, hard-edge layout, limited typefaces (Songti / PingFang / Georgia / Segoe UI / Consolas).
4. **Apply** — Build this site *from* that system (not the other way around): dual-column editorial gallery, generous whitespace, quiet scroll reveals, draggable film strip, lightbox. The exhibition-style demo and contact-sheet labs were intermediate steps; only the portfolio is published.

Original camera folders stay local and are not in git. The repo ships web-optimized copies of the 50 selected photos under `images/`.

## Browse

- **Live:** [https://lucashuang-an.github.io/YOUR-TASTE/](https://lucashuang-an.github.io/YOUR-TASTE/)
- Local: static server from the repo root

```bash
python -m http.server 5173
# http://localhost:5173/
```

## Structure

```
index.html            # portfolio (entry)
css/styles.css
js/photos.js          # 50-frame map (chapters + alt)
js/main.js            # reveal, lightbox, drag strip
images/               # web-optimized JPGs used on the site
DESIGN.md             # design system spec
design-system.html    # visual token / type / component reference
docs/compose/         # feature specs & layout studies
```

## Design system (short)

| Role | Token | Notes |
|------|--------|--------|
| Background | `#E6E4DE` | cool paper, not cream |
| Ink | `#14161A` | text |
| Accent | `#B84A32` | terracotta — links & primary actions only |
| Cool | `#5B7FA3` | secondary information |
| Type | Songti SC / Georgia · PingFang SC / Segoe UI · Consolas | CJK ≤3, Latin ≤3 |

Full rules: [`DESIGN.md`](DESIGN.md) · visual reference: [`design-system.html`](design-system.html)

---

## 中文

个人摄影作品集：视觉系统先从照片里长出来，再反过来做网站。

## 项目背景

一条完整的闭环：

1. **选片** — 从三个相机原始文件夹（`100_PANA` / `101_PANA` / `102_PANA`）中挑出 50 张：不要人像，主体不重复。
2. **提取** — 用大模型（多模态 + 文本）结合像素统计与联系表审读，提炼色彩、光线、情绪与题材规律；过曝、死黑、杂乱、正脸等问题张反复替换。
3. **成系统** — 得到 **YOUR-TASTE v2** 设计系统：冷纸底、稀疏赤陶强调、冷蓝信息色、硬边版式、字体中英各不超过 3 种。
4. **反哺建站** — 作品集按系统实现，而不是先做模板再贴图：双栏编辑式图墙、大留白、克制滚动显现、可拖动胶片条、灯箱。中间还做过影像展演示页与排版对比，最终公开的是作品集本体。

原始相机文件夹不入库；仓库仅包含网页优化后的 50 张精选图（`images/`）。

## 在线浏览

- **线上：** [https://lucashuang-an.github.io/YOUR-TASTE/](https://lucashuang-an.github.io/YOUR-TASTE/)
- 本地预览：在仓库根目录起静态服务

```bash
python -m http.server 5173
# http://localhost:5173/
```

## 目录结构

同英文 “Structure” 一节。

## 设计系统摘要

同英文 “Design system (short)” 一节。完整规范见 [`DESIGN.md`](DESIGN.md)，可视化见 [`design-system.html`](design-system.html)。
