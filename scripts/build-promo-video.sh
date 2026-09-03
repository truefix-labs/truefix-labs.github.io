#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
font_regular="/System/Library/Fonts/SFNS.ttf"
font_mono="/System/Library/Fonts/SFNSMono.ttf"
output_file="$project_dir/assets/truefix-studio-promo.mp4"

ffmpeg -hide_banner -loglevel warning -y \
  -f lavfi -t 4 -i "color=c=0x080b10:s=1920x1080:r=30" \
  -loop 1 -t 6 -i "$project_dir/assets/workstation.png" \
  -loop 1 -t 6 -i "$project_dir/assets/intelligence.png" \
  -loop 1 -t 6 -i "$project_dir/assets/ai-quant.png" \
  -f lavfi -t 4 -i "color=c=0x080b10:s=1920x1080:r=30" \
  -filter_complex "
    [0:v]drawbox=x=130:y=290:w=10:h=340:color=0x74b8ec:t=fill,
      drawtext=fontfile='${font_regular}':text='TRUEFIX STUDIO':fontcolor=white:fontsize=112:x=190:y=330,
      drawtext=fontfile='${font_mono}':text='EVIDENCE-DRIVEN TRADING':fontcolor=0x74b8ec:fontsize=28:x=198:y=500,
      drawtext=fontfile='${font_mono}':text='MARKET / INTELLIGENCE / STRATEGY / RISK / EXECUTION':fontcolor=0x7f8b98:fontsize=21:x=198:y=570,
      fade=t=in:st=0:d=0.5,fade=t=out:st=3.45:d=0.55,setpts=PTS-STARTPTS[v0];
    [1:v]fps=30,scale=2140:-2,crop=1920:1080:x='(iw-ow)*t/6':y='(ih-oh)*(1-t/6)',
      drawbox=x=0:y=820:w=1920:h=260:color=black@0.70:t=fill,
      drawtext=fontfile='${font_mono}':text='01 / TRADING WORKSTATION':fontcolor=0x74b8ec:fontsize=24:x=110:y=870,
      drawtext=fontfile='${font_regular}':text='Market context to execution. One visible chain.':fontcolor=white:fontsize=48:x=110:y=930,
      fade=t=in:st=0:d=0.5,fade=t=out:st=5.45:d=0.55,setpts=PTS-STARTPTS[v1];
    [2:v]fps=30,scale=2140:-2,crop=1920:1080:x='(iw-ow)*(1-t/6)':y='(ih-oh)*t/6',
      drawbox=x=0:y=820:w=1920:h=260:color=black@0.70:t=fill,
      drawtext=fontfile='${font_mono}':text='02 / INTELLIGENCE':fontcolor=0x74b8ec:fontsize=24:x=110:y=870,
      drawtext=fontfile='${font_regular}':text='Signals stay connected to evidence and replay.':fontcolor=white:fontsize=48:x=110:y=930,
      fade=t=in:st=0:d=0.5,fade=t=out:st=5.45:d=0.55,setpts=PTS-STARTPTS[v2];
    [3:v]fps=30,scale=2140:-2,crop=1920:1080:x='(iw-ow)*t/6':y='(ih-oh)*t/6',
      drawbox=x=0:y=820:w=1920:h=260:color=black@0.70:t=fill,
      drawtext=fontfile='${font_mono}':text='03 / AUTHORIZED AI + QUANT':fontcolor=0x74b8ec:fontsize=24:x=110:y=870,
      drawtext=fontfile='${font_regular}':text='Deterministic runtime. Explicit authority.':fontcolor=white:fontsize=48:x=110:y=930,
      fade=t=in:st=0:d=0.5,fade=t=out:st=5.45:d=0.55,setpts=PTS-STARTPTS[v3];
    [4:v]drawbox=x=130:y=315:w=10:h=285:color=0x4dc8a0:t=fill,
      drawtext=fontfile='${font_regular}':text='BUILT FOR CLARITY.':fontcolor=white:fontsize=88:x=190:y=350,
      drawtext=fontfile='${font_regular}':text='ENGINEERED FOR CERTAINTY.':fontcolor=0x74b8ec:fontsize=88:x=190:y=455,
      drawtext=fontfile='${font_mono}':text='TRUEFIX STUDIO / PRE-RELEASE':fontcolor=0x7f8b98:fontsize=23:x=198:y=585,
      fade=t=in:st=0:d=0.5,fade=t=out:st=3.45:d=0.55,setpts=PTS-STARTPTS[v4];
    [v0][v1][v2][v3][v4]concat=n=5:v=1:a=0,fps=30,settb=expr=1/30,setpts=N,format=yuv420p[outv]
  " \
  -map "[outv]" -an -c:v libx264 -preset medium -crf 22 -profile:v high \
  -movflags +faststart "$output_file"

printf '%s\n' "Built $output_file"
