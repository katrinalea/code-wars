// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

export function validBraces(braces: string): boolean{
    const braceArray: string [] = braces.split("")
    const bracesStack: string [] = []
    
    for (const item of braceArray){
      bracesStack.push(item)
       if 
        (bracesStack[bracesStack.indexOf(item)-1]  === "(" && item === ")"){
          bracesStack.pop()
          bracesStack.pop()
       } else if 
        (bracesStack[bracesStack.indexOf(item)-1]  === "[" && item === "]"){
          bracesStack.pop()
          bracesStack.pop()
        } else if
        (bracesStack[bracesStack.indexOf(item)-1]  === "{" && item === "}"){
          bracesStack.pop()
          bracesStack.pop()
         }
      }
       if (bracesStack.length === 0){
        return true
      } else {
        return false
      }
      }
      