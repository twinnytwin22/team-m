//import { supabase, supabaseAdmin } from "@/lib/supabase/client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


// import path from 'path';
// import { spawn } from 'child_process';

// const scriptPath = path.resolve(__dirname, '../clip-generator/main.py');

// const runClipGenerator = () => {
//   const python = spawn('python3', [scriptPath]);

//   python.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });

//   python.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });

//   python.on('close', (code) => {
//     console.log(`Clip generator finished with code ${code}`);
//   });
// };

// runClipGenerator();


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export interface UploadClipResponse {
  path: string
  id: string
  // Add other properties returned by supabase if needed
}

export interface UploadClipError {
  message: string
  // Add other properties returned by supabase if needed
}

// export async function uploadClip(
//   file: File,
//   userId: string
// ): Promise<UploadClipResponse> {
//   const filePath = `${userId}/${Date.now()}-${file.name}`
//   const { data, error }: { data: UploadClipResponse | null; error: UploadClipError | null } = await supabaseAdmin.storage
//     .from('uploads')
//     .upload(filePath, file)

//   if (error) {
//     console.error("Error uploading file:", JSON.stringify(error))
//     throw error
//   }
//   console.log("File uploaded successfully:", JSON.stringify(data))
//   return data as UploadClipResponse
// }
