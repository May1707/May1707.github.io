import tkinter as tk
from tkinter import ttk
from time import sleep

# Crear la ventana principal
root = tk.Tk()
root.title("te quiero")
root.geometry("400x300")

# Función para mostrar las entradas
def mostrar_entradas():
    boton.pack_forget()
    

    mensaje_label = ttk.Label(root, text="   ")
    mensaje_label.pack(pady=10)
    
    pregunta_label = ttk.Label(root, text="Dime qué piensas:")
    pregunta_label.pack(pady=5)
    
    pensamiento_entry = ttk.Entry(root)
    pensamiento_entry.pack(pady=5)
    
    submit_button = ttk.Button(root, text="Enviar", command=lambda: adivinar_pensamiento(pensamiento_entry.get()))
    submit_button.pack(pady=10)

def adivinar_pensamiento(pensamiento):
    for widget in root.winfo_children():
        widget.destroy()
    
    carga_label = ttk.Label(root, text="Cargando...")
    carga_label.pack(pady=10)
    
    root.update_idletasks()
    
    for i in range(1, 101):
        carga_label.config(text=f"Cargando... {i}%")
        root.update_idletasks()
        sleep(0.1)

    resultado_label = ttk.Label(root, text=f"pienso que pensaste en: '{pensamiento}'")
    resultado_label.pack(pady=20)

# Crear y colocar el botón inicial
boton = ttk.Button(root, text="buenassssssssssssssssssss", command=mostrar_entradas)
boton.pack(pady=20)

# Ejecutar el bucle principal
root.mainloop()
