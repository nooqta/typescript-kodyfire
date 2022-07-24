import { IConcept, ITechnology } from "kodyfire-core";
import { copyTsConfigFile, getTsConfigs } from "tsconfig-templates";
import { Concept as BaseConcept } from "basic-kodyfire";
import { Engine } from "./engine";
import { join } from "path";
import fs from "fs";

export class Tsconfig extends BaseConcept {
  constructor(concept: Partial<IConcept>, technology: ITechnology) {
    super(concept, technology);
    this.engine = new Engine();
  }

  async generate(_data: any) {
    const file = getTsConfigs().find((file: any) => file.name === _data.name);
    if (!file) throw new Error(`No tsconfig file found for ${_data.name}`);
    const outputDir = join(
      this.technology.rootDir,
      this.outputDir,
      _data.outputDir
    );
    // We need to create the directory if it doesn't exist
    await fs.promises.mkdir(outputDir, { recursive: true });
    if (!fs.existsSync(join(outputDir, `tsconfig.json`))) {
      copyTsConfigFile(file.filename, outputDir);
    } else {
      console.log(`tsconfig.json already exists in ${outputDir}`);
    }
  }
}
