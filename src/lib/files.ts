export function setFileContent(filename: string) {
  return `
    const ${filename} = () => {
      return (
        <></>
      )
    }

    export default ${filename}
  `
}