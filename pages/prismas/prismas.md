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
  - [Slides - Aula 15/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-15.pdf)
  - [Slides - Aula 08/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-08.pdf)
  - [Slides - Aula 01/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-01.pdf)
drawings:
  persist: true
download: /geometria-espacial/assets/geometria-espacial-2023-08-15.pdf
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
  <a href="https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-15.pdf" target="_blank" alt="PDF"
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

---
layout: default
hideInToc: true
---

# Prismas

<Toc maxDepth="1"></Toc>

---
layout: two-cols
---

# Prismas - Definição

<v-clicks>

- Base

- Altura

- Face lateral

</v-clicks>

::right::

<Prisms />

---

# Prismas - Nomenclatura

<PrismsCategories />

---

# Prismas - Áreas

<v-clicks>

- Área das Bases

- Área Lateral

- Área Total

</v-clicks>

---

## Prisma - Planificação e Áreas

<PrismNet />


---

# Prismas - Volume

Para calcular o volume de primas, utilizamos a fórmula:

$$
\begin{array}{c}
V = A_{b}h
\end{array}
$$

Em que:

- $V$ é o volume do prisma
- $A_{b}$ é a área da base do prisma
- $h$ é a altura do prisma

---

# Prisma - Projeções

<ProjectionsPrismInteractive />

---
layout: two-cols
---

# Extra - Tronco de Prisma

<v-clicks>

- Área

- Volume
  - Média aritimética das alturas
</v-clicks>

::right::

<TruncatedPrism :position="[0,0,0]" />

---

# Prisma - Área e Volume

<PrismsAreaVolume />

---

# Questões ENEM

## ENEM 2020

A caixa-d'água de um edifício terá a forma de um paralelepípedo retângulo reto com volume igual a 28080 litros. Em uma maquete que representa o edifício, a caixa-d'água tem dimensões 2cm x 3,51cm x 4cm. Dado: 1 dm³ = 1 L.

A escala usada pelo arquiteto foi?

**a)** 1:10

**b)** 1:100

**c)** 1:1 000

**d)** 1:10 000

**e)** 1:100 000

---

## ENEM 2020 (continuação)


---
layout: two-cols
---

## ENEM 2022

Um robô, que tem um ímã em sua base, se desloca sobre a superfície externa de um cubo metálico, ao longo de segmentos de reta cujas extremidades são pontos médios de arestas e centros de faces. Ele inicia seu deslocamento no ponto P, centro da face superior do cubo, segue para o centro da próxima face, converte à esquerda e segue para o centro da face seguinte, converte à direita e continua sua movimentação, sempre alternando entre conversões à esquerda e à direita quando alcança o centro de uma face. O robô só termina sua movimentação quando retorna ao ponto P. A figura apresenta os deslocamentos iniciais desse robô.

::right::

<img class="m-auto" src="/assets/2022-178.png" width="300">

A projeção ortogonal do trajeto descrito por esse robô
sobre o plano da base, após terminada sua movimentação,
visualizada da posição em que se está enxergando esse
cubo, é?

---
layout: two-cols
---

## ENEM 2022 (continuação)

Esboçar as projeções!

<img class="m-auto" src="/assets/2022-178.png" width="300">

::right::

---
layout: center
---

## Obrigado!