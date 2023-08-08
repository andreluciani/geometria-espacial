<script lang="ts" setup>
import { drauuOptions, drawingEnabled, drawingMode, drauu, brush, clearDrauu, brushColors } from "@slidev/client/logic/drawings.ts";
// Brush Colors
const customColors = [
    "#f04848",
    "#ffd166",
    "#06d6a0",
    "#118ab2",
    "#073b4c",
    "#ffffff",
    "#000000",
]
const markerColors = [
    "rgba(240, 72, 72, 0.3)",
    "rgba(255, 209, 102, 0.3)",
    "rgba(6, 214, 160, 0.3)",
    "rgba(17, 138, 178, 0.3)"
]
brushColors.forEach((_, idx) => { brushColors[idx] = customColors[idx] });
markerColors.forEach((color, _) => {
    brushColors.push(color)
})

function filterUndefinedValuesInPlace(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === undefined) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
}
filterUndefinedValuesInPlace(brushColors);

// Styles (size, smoothing, etc)
brush.size = 2;
brush.stylusOptions = {
    size: 2,
    thinning: 0.6,
    streamline: 0.05,
    start: {
        taper: 0,
    },
    end: {
        taper: 0,
    },
}

window.addEventListener('keydown', (e) => {
    if (!drawingEnabled.value)
        return

    const noModifier = !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey
    let handled = true
    if (e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)) {
        if (e.shiftKey)
            drauu.redo()
        else
            drauu.undo()
    }
    else if (e.code === 'Escape') {
        drawingEnabled.value = false
    }
    else if (e.code === 'KeyL' && noModifier) {
        drawingMode.value = 'line'
    }
    else if (e.code === 'KeyA' && noModifier) {
        drawingMode.value = 'arrow'
    }
    else if (e.code === 'KeyS' && noModifier) {
        drawingMode.value = 'stylus'
    }
    else if (e.code === 'KeyR' && noModifier) {
        drawingMode.value = 'rectangle'
    }
    else if (e.code === 'KeyE' && noModifier) {
        drawingMode.value = 'ellipse'
    }
    else if (e.code === 'KeyC' && noModifier) {
        clearDrauu()
    }
    else if (e.code.startsWith('Digit') && noModifier && +e.code[5] <= brushColors.length) {
        brush.color = brushColors[+e.code[5] - 1]
    }
    // Adding + and - key binding to change brush size up or down respectively
    else if (e.code === 'Equal' && (e.ctrlKey || e.metaKey)) {
        if (!drauuOptions.brush) {
            return
        }
        if (drauuOptions.brush.size < 10) {
            drauuOptions.brush.size += 0.25
        }
        if (drauuOptions.brush.stylusOptions && drauuOptions.brush.stylusOptions.size && drauuOptions.brush.stylusOptions.size < 10) {
            drauuOptions.brush.stylusOptions.size += 0.25
        }
    }
    else if (e.code === 'Minus' && (e.ctrlKey || e.metaKey)) {
        if (!drauuOptions.brush) {
            console.log("Oh no... brush not defined")
            return
        }
        if (drauuOptions.brush.size > 0.5) {
            drauuOptions.brush.size -= 0.25
        }
        if (drauuOptions.brush.stylusOptions && drauuOptions.brush.stylusOptions.size && drauuOptions.brush.stylusOptions.size > 0.5) {
            drauuOptions.brush.stylusOptions.size -= 0.25
        }
    }
    else {
        handled = false
    }

    if (handled) {
        e.preventDefault()
        e.stopPropagation()
    }
}, false)
</script>
<template></template>