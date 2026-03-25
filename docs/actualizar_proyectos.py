#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para actualizar automáticamente el archivo projects.json
Ejecutar: python actualizar_proyectos.py
"""

import json
import os
from pathlib import Path


def obtener_archivos_html(carpeta):
    """Obtiene todos los archivos .html de una carpeta"""
    archivos = []
    if os.path.exists(carpeta):
        for archivo in os.listdir(carpeta):
            if archivo.endswith('.html'):
                archivos.append(archivo)
    return sorted(archivos)


def obtener_nombre_amigable(nombre_archivo):
    """Convierte nombre de archivo en nombre amigable con emoji si es posible"""
    nombre_sin_extension = nombre_archivo.replace('.html', '')

    # Mapeo de nombres conocidos con emojis
    nombres_conocidos = {
        'Audi': ('🚗', 'Audi'),
        'Github Dashboard': ('💻', 'Github Dashboard'),
        'McDoanlds': ('🍔', 'McDonald\'s'),
        'SpaceX': ('🚀', 'SpaceX'),
        'index': ('📄', 'Index'),
    }

    # Buscar coincidencia exacta
    for clave, (emoji_val, nombre_val) in nombres_conocidos.items():
        if nombre_sin_extension.lower() == clave.lower():
            return emoji_val, nombre_val

    # Si no hay coincidencia, generar automáticamente
    return '📄', nombre_sin_extension


def crear_estructura_proyectos(ruta_docs):
    """Crea la estructura de proyectos basada en los directorios existentes"""
    proyectos = []

    emojis = {
        'ejercicio-1': '🎨',
        'ejercicio-2': '🖼️',
        'ejercicio-3': '🌐',
        'ejercicio-4': '📝',
        'ejercicio-5': '📝',
        'ejercicio-6': '📝',
        'ejercicio-7': '📝',
        'ejercicio-8': '📝',
        'ejercicio-9': '📝'
    }

    # Buscar carpetas de ejercicios
    for i in range(1, 10):
        carpeta_nombre = f"ejercicio-{i}"
        carpeta_path = os.path.join(ruta_docs, carpeta_nombre)
        emoji = emojis.get(carpeta_nombre, '📝')

        if os.path.exists(carpeta_path):
            index_html = os.path.join(carpeta_path, 'index.html')
            carpeta_html = os.path.join(carpeta_path, 'html')

            # Obtener archivos en carpeta html/ si existe
            archivos_en_html = obtener_archivos_html(
                carpeta_html) if os.path.exists(carpeta_html) else []

            if os.path.exists(index_html) or archivos_en_html:
                # El ejercicio tiene contenido

                # Si hay archivos en carpeta html/, mostrarlos como subproyectos
                if archivos_en_html:
                    subproyectos = []
                    for archivo in archivos_en_html:
                        emoji_archivo, nombre_archivo = obtener_nombre_amigable(
                            archivo)
                        ruta_relativa = f"./ejercicio-{i}/html/{archivo}"
                        subproyectos.append({
                            "emoji": emoji_archivo,
                            "name": nombre_archivo,
                            "path": ruta_relativa
                        })

                    # Determinar título según si también tiene index.html
                    titulo = f"Ejercicio {i}"
                    if len(archivos_en_html) > 1:
                        titulo += " - Múltiples Proyectos"
                    elif len(archivos_en_html) == 1:
                        titulo += " - Proyecto Web"

                    proyecto = {
                        "id": i,
                        "title": titulo,
                        "emoji": emoji,
                        "type": "completed",
                        "subprojects": subproyectos
                    }

                    # Si también tiene index.html en la raíz, agregarlo a subproyectos
                    if os.path.exists(index_html):
                        proyecto["subprojects"].insert(0, {
                            "emoji": "📄",
                            "name": "Principal",
                            "path": f"./ejercicio-{i}/index.html"
                        })

                    proyectos.append(proyecto)
                else:
                    # Solo tiene index.html en la raíz
                    proyecto = {
                        "id": i,
                        "title": f"Ejercicio {i}",
                        "emoji": emoji,
                        "type": "completed",
                        "path": f"./ejercicio-{i}/index.html"
                    }
                    proyectos.append(proyecto)
            else:
                # Ejercicio sin contenido completado
                proyecto = {
                    "id": i,
                    "title": f"Ejercicio {i}",
                    "emoji": emoji,
                    "type": "pending"
                }
                proyectos.append(proyecto)
        else:
            # Ejercicio no existe
            proyecto = {
                "id": i,
                "title": f"Ejercicio {i}",
                "emoji": emoji,
                "type": "pending"
            }
            proyectos.append(proyecto)

    return {"projects": proyectos}


def main():
    # Obtener la ruta del directorio actual (docs)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    ruta_docs = script_dir

    print(f"Actualizando proyectos en: {ruta_docs}")

    # Crear estructura
    estructura = crear_estructura_proyectos(ruta_docs)

    # Guardar en JSON
    archivo_json = os.path.join(ruta_docs, 'projects.json')
    with open(archivo_json, 'w', encoding='utf-8') as f:
        json.dump(estructura, f, ensure_ascii=False, indent=2)

    print(f"✓ Archivo actualizado: {archivo_json}")
    print(f"✓ Total de proyectos detectados: {len(estructura['projects'])}")

    completados = [p for p in estructura['projects']
                   if p['type'] == 'completed']
    pendientes = [p for p in estructura['projects'] if p['type'] == 'pending']

    print(f"  - Completados: {len(completados)}")
    print(f"  - Pendientes: {len(pendientes)}")


if __name__ == "__main__":
    main()
