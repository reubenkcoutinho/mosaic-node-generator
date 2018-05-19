import * as Jimp from 'jimp';
export declare class RGB {
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number);
    getColorDistance(rgb: RGB): number;
}
export declare class MosaicService {
    private default_cell_width;
    private default_cell_height;
    private default_columns;
    private default_rows;
    private default_final_image_name;
    private default_tiles_dir;
    orig_image: Jimp.Jimp;
    image: Jimp.Jimp;
    image_width: number;
    image_height: number;
    cell_width: number;
    cell_height: number;
    rows: number;
    columns: number;
    aspect_ratio: number;
    final_image_name: string;
    tiles_dir: string;
    tiles: Jimp.Jimp[];
    img_tiles_matrix: any[];
    constructor(image: Jimp.Jimp, tiles_dir?: string, final_image_name?: string, cell_width?: number, cell_height?: number, columns?: number, rows?: number);
    asyncForEach(arr: any[], cb: any): Promise<void>;
    asyncFor(n: number, cb: any): Promise<void>;
    private _prepare();
    readTiles(tilesDir?: string): Promise<Jimp.Jimp[]>;
    getBestTileForImage(imageAvgColor: RGB, row: number, col: number): Promise<Jimp.Jimp>;
    generateMosaicImage(tilesDir?: string): Promise<{}>;
    generateMosaicImage_new(tilesDir?: string): void;
    private _generateMosaicImage(rowStart, colStart, numRows, numCols);
    cropImage(x: number, y: number, w: number, h: number): Jimp;
    save(imageName?: string): void;
    private jimpRead(path);
    getImageAvgColor(image: Jimp.Jimp, x_start: number, y_start: number, width: number, height: number): Promise<RGB>;
}
