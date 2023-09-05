---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  <p align="center">
    <img src="/geometria-espacial/assets/logo.png" />
    <h3 align="center">Geometria Espacial</h3>
  </p>

  Conceitos, exemplos e exercícios.

  - [Código Fonte da Apresentação](https://github.com/andreluciani/geometria-espacial)
  - [Slides - Aula 22/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-22.pdf)
  - [Slides - Aula 15/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-15.pdf)
  - [Slides - Aula 08/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-08.pdf)
  - [Slides - Aula 01/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-01.pdf)
drawings:
  persist: true
download: /geometria-espacial/assets/geometria-espacial-2023-08-22.pdf
transition: slide-left
colorSchema: light
favicon: /favicon.png
title: Geometria Espacial
titleTemplate: '%s'
hideInToc: true
canvasWidth: 1200
---

<DrauuConfig/>
<Logo />

# Geometria Espacial

Prof. André

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/andreluciani/geometria-espacial" target="_blank" alt="Código Fonte (GitHub)"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://andreluciani.github.io/geometria-espacial/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <octicon-link-16 />
  </a>
  <a href="https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-22.pdf" target="_blank" alt="PDF"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <fa6-solid:file-pdf />
  </a>
</div>

---
layout: default
hideInToc: true
---

# Slides das Aulas Passadas

- [Introdução - Parte 1](/geometria-espacial/introducao-pt1) - 01/08/2023
- [Introdução - Parte 2](/geometria-espacial/introducao-pt2) - 08/08/2023
- [Prismas](/geometria-espacial/prismas) - 15/08/2023

---
layout: default
hideInToc: true
---

# Pirâmides

<Toc maxDepth="1"></Toc>

---
layout: two-cols
---

# Pirâmides - Definição

<v-clicks>

- Base

- Altura

- Face lateral

</v-clicks>

::right::

<Pyramids />

---

# Pirâmides - Nomenclatura

<PyramidsCategories />

---

# Pirâmides - Áreas

<v-clicks>

- Área da Base

- Área Lateral

- Área Total

</v-clicks>

---

## Pirâmide - Planificação e Áreas

<PyramidNet />


---

<style>
  .katex { font-size: 2em; }
</style>


# Pirâmides - Volume

- Para calcular o volume de pirâmides, utilizamos a fórmula:

$$
\begin{array}{c}
V = \frac{A_{b}h}{3}
\end{array}
$$

Em que:

- $V$ é o volume do pirâmide
- $A_{b}$ é a área da base da pirâmide
- $h$ é a altura da pirâmide

---

<style>
  .katex { font-size: 1em; }
</style>

# Pirâmides - Exercício

- Uma das 7 maravilhas do mundo é a Grande Pirâmide de Gizé. Ela se chama Quéops, e fica próxima à outras duas grandes pirâmides, Quéfren e Miquerinos.

- A altura da pirâmide Quéops é aproximadamente **140 metros** e a lateral da sua base é cerca de **230 metros**.

<img class="m-auto" src="/assets/queops.jpg" width="600">

---

## Pirâmides - Exercício

- Assumindo que a pirâmide Quéops é uma pirâmide quadrangular regular de altura igual a **100m** e lateral da base **200m** determine:

- A área lateral da pirâmide

- O volume da pirâmide

- Estimar a massa da pirâmide.

- Dados:
  - $\sqrt{2} \approx 1,41$
  - Densidade do granito: $3 \text{ton} / m^{3}$

---

## Pirâmides - Exercício

- Assumindo que a pirâmide Quéops é uma pirâmide quadrangular regular de altura igual a **100m** e lateral da base **200m** determine:

- A área lateral da pirâmide

- O volume da pirâmide

- Estimar a massa da pirâmide.

- Dados:
  - $\sqrt{2} \approx 1,41$
  - Densidade do granito: $3 \text{ton} / m^{3}$

---
layout: two-cols
---

# Extra

## Tronco de Pirâmide

<v-clicks>

- Área

- Volume

</v-clicks>

::right::

<PyramidFrustum />

---
layout: center
---

## Obrigado!