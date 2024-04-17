import path from "node:path"
import fs from 'node:fs/promises'

export class ComponentManager {
  private componentName: string
  private componentsFolder: string

  constructor(componentName: string) {
    this.componentName = componentName
    this.componentsFolder = path.join(__dirname, '..', 'src', 'components')
  }

  public setComponentContent(filename: string): string {
    return `
      const ${filename} = () => {
        return (
          <></>
        )
      }
  
      export default ${filename}
    `.trim()
  }

  public async createComponent(): Promise<void> {
    const componentContent = this.setComponentContent(`${this.componentName}`)
    const createdComponentPath = path.join(this.componentsFolder, `${this.componentName}.tsx`)

    try {
      await fs.mkdir(this.componentsFolder, { recursive: true })
      await fs.writeFile(createdComponentPath, componentContent)
    } catch (error) {
      console.log(error)
    } 
  }
}