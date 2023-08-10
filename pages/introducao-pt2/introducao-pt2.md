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
  - [Slides - Aula 08/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-08.pdf)
  - [Slides - Aula 01/08/2023](https://andreluciani.github.io/geometria-espacial/assets/geometria-espacial-2023-08-01.pdf)
drawings:
  persist: true
download: /geometria-espacial/assets/geometria-espacial-2023-08-01.pdf
transition: slide-left
colorSchema: light
favicon: /favicon.png
title: Geometria Espacial
titleTemplate: '%s'
hideInToc: true
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
  <a href="/geometria-espacial/assets/geometria-espacial-2023-08-01.pdf" target="_blank" alt="PDF"
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

---
layout: default
hideInToc: true
---

# Introdução

<Toc maxDepth="1"></Toc>

---

# Quiz - Recapitulando

<Quiz questionsNumber=1 />

---
layout: two-cols
---

# Geometria Espacial

## Conceitos

<v-clicks>

- A **terceira** dimensão

- Volume

- Vértices, Arestas e Faces

</v-clicks>

::right::

<Solids />

---

## Dimensões

### Tridimensional

---

# Sólidos Geométricos

### Poliedros e Corpos Redondos

---

# Poliedros

- Faces **poligonais**
- Superfície: reunião das faces
- Convexidade:
    - Em poliedros convexos as faces são polígonos **convexos**

---
layout: center
---

# Relação de Euler

- A relação de Euler é uma equação _sempre_ válida para poliedros **convexos**:

$$
\begin{array}{c}

V + F = A + 2 \\

V -A + F = 2

\end{array}
$$

Em que:

- $V$ é o número de **V**értices
- $F$ é o número de **F**aces
- $A$ é o número de **A**restas

Poliedros que respeitam essa relação são chamados **poliedros eulerianos**

---

# Poliedros de Platão

<PlatonicSolids />

---

# Poliedros Regulares

- Faces são polígonos **regulares** e **congruentes**
- Ângulos poliédricos são **congruentes**

---

# Corpos Redondos

- Cilindro

- Cone

- Esfera

---

# Projeções Ortogonais

<Projections />

---

## Projeções - Interativo

<ProjectionsInteractive />

---

# Quiz

<Quiz questionsNumber=2 />

---
layout: center
---

## Obrigado!