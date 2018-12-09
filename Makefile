source_files := $(wildcard docs/*.md)

rmimg: $(source_files)
	sed -i '' 's/!\[\]/\[img\]/g' $?
