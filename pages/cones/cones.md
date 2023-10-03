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
  - [Slides - Aula 19/09/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-09-19.pdf)
  - [Slides - Aula 12/09/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-09-12.pdf)
  - [Slides - Aula 29/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-29.pdf)
  - [Slides - Aula 15/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-15.pdf)
  - [Slides - Aula 08/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-08.pdf)
  - [Slides - Aula 01/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-01.pdf)
drawings:
  persist: true
download: /geometria-espacial/assets/geometria-espacial-2023-09-19.pdf
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
  <a href="https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-09-19.pdf" target="_blank" alt="PDF"
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
- [Prismas](/geometria-espacial/prismas) - 15/08/2023 e 22/08/2023
- [Pirâmides - Parte 1](/geometria-espacial/piramides-pt1) - 29/08/2023
- [Pirâmides - Parte 2](/geometria-espacial/piramides-pt2) - 05/09/2023
- [Cilindros](/geometria-espacial/cilindros) - 12/09/2023

---
layout: default
hideInToc: true
---

# Cones

<Toc maxDepth="1"></Toc>

---
layout: two-cols
---

# Cones - Definição

<v-clicks>

- Base

- Altura

- Superfície lateral

</v-clicks>

::right::

<Cones /> 

---

# Cones - Nomenclatura

---

# Cones - Áreas

<v-clicks>

- Área da Base

  - $A_{b} = \pi R^{2}$

- Área Lateral

  - $A_{l} = \pi R g$

- Área Total

  - $A_{t} = A_{b} + A_{l}$

</v-clicks>

---

## Cones - Planificação e Áreas

<img class="m-auto" src="/assets/cone-unwrap.gif" width="600" />


---

## Cones - Planificação e Áreas


---

<style>
  .katex { font-size: 2em; }
</style>


# Cones - Volume

- Para calcular o volume de cones, utilizamos a fórmula:

$$
\begin{array}{c}
V = \frac{A_{b}h}{3}
\end{array}
$$

Em que:

- $V$ é o volume do cone
- $A_{b}$ é a área da base do cone: $A_{b} = \pi r^{2}$
- $h$ é a altura do cone

---

# Cones - Exercício
## ENEM 2022

Uma empresa produz e vende um tipo de chocolate, maciço, em formato de cone circular reto com as medidas do diâmetro da base e da altura iguais a 8 cm e 10 cm, respectivamente, como apresenta a figura.

<img class="m-auto" src="/assets/cone-enem.png" width="300" />

Devido a um aumento de preço dos ingredientes utilizados na produção desse chocolate, a empresa decide produzir esse mesmo tipo de chocolate com um volume 19% menor, no mesmo formato de cone circular reto com altura de 10 cm. Para isso, a empresa produzirá esses novos chocolates com medida do raio da base, em centímetro, igual a:

---

## Cones - Exercício (continuação)


... Para isso, a empresa produzirá esses novos chocolates com medida do raio da base, em centímetro, igual a:

A) 1,52.

B) 3,24.

C) 3,60.

D) 6,48.

E) 7,20.

---

# Cones - Projeções

---
layout: two-cols
---

# Extra

## Tronco de Cone - Área

- Para calcular a área de troncos de cones retos, utilizamos a fórmula:

$$
\begin{array}{c}
A_{lat} = \pi \left ( R + r \right ) . g_{T} \\
\\
A_{bases} = \pi r^{2} + \pi R^{2} = \pi \left ( r^{2} + R^{2} \right )
\end{array}
$$

---
layout: two-cols
---

## Tronco de Cone - Planificação

---
layout: two-cols
---

# Extra

## Tronco de Cone - Volume

- Para calcular o volume de troncos de cones retos, utilizamos a fórmula:

$$
\begin{array}{c}
V_{tronco} = \frac{\pi h_{T}}{3} \left ( r^{2} + R^{2} + Rr \right )
\end{array}
$$


---
layout: two-cols
---

## Tronco de Cone - Projeções Ortogonais


---
layout: center
---

## Obrigado!