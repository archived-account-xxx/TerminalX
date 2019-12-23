content = ""
terminal = new Terminal()
terminal.open(document.getElementById("app"))
terminal.writeln("Welcome to TerminalX! To see all commands type in help")
terminal.write("\r\n$ ")
terminal.focus()
terminal.onKey((e)=>{
  if(e.domEvent.keyCode == 13){
    if(content.toLowerCase() == "help" || content.toLowerCase() == "?"){
      terminal.write("\n")
      terminal.write(`exit - Exits the website`)
      terminal.write("\r\n$ ")
    }else if(content.toLowerCase() == "exit"){
      window.close()
    }else{
      terminal.write("\n")
      terminal.write(`"${content}" is not a command`)
      terminal.write("\r\n$ ")
    }
    content = ""
    return
  }else if(e.domEvent.keyCode == 8){
    content = content.slice(0,content.length - 1)
    alert(content)
    terminal.write("\b \b")
  }
  terminal.write(e.key)
  content += e.key
})